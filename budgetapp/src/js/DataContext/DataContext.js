import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {

  const [incomeData, setIncomeData] = useState([])
  const [expensesData, setExpensesData] = useState([]);
  const [operationsData, setOperationsData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] =useState(0);

  useEffect(() => {
        Promise.all ([
          fetch("http://localhost:3005/membersIncome"), 
          fetch("http://localhost:3005/categories"),
          fetch("http://localhost:3005/operations")
          ]).then((result) => {
            return Promise.all(result.map(r=>r.json()))
            }).then(([data1, data2, data3]) => {
                setIncomeData(data1);
                setExpensesData(data2);
                setOperationsData(data3);
              });      
             
      }, []);

  useEffect(()=>{
    calculateTotalIncome(incomeData);
  },[incomeData]);


  const calculateTotalIncome = (data) => {
    const allIncomes = data.map((member)=>member.incomes);
    const amounts = allIncomes.map((memberIncomes)=>memberIncomes.map(income=>income.amount));
    if(amounts.length > 0) {
      const mergedAmounts = amounts.reduce((array, element)=>[...array, ...element]); 
      const total = mergedAmounts.reduce((sum, income)=>sum+income);
      setTotalIncome(total);
      return total;
    } else {
      return 0;
    }
  }

  useEffect(()=>{
    calculateTotalExpenses(operationsData);
  },[operationsData]);

  const calculateTotalExpenses = (data) => {
    const operationsAmountArray = data.map(operation => operation.amount);
    if (operationsAmountArray.length > 0) {
      const total = operationsAmountArray.reduce((total, amount)=> total+amount);
      setTotalExpenses(total);
      return total;
    } else {
      return 0;
    }
  }


  // function sumUpSubcategoryExpenses sums us all operations in the corresponding Category or Subcategory
  const sumUpSubcatExpenses = (catID, subCatID) => {
    if (operationsData.length > 0) {
      const filtered = subCatID ? 
          operationsData.filter(operation => (operation.categoryID === catID && operation.subcategoryID === subCatID))
        : operationsData.filter(operation => (operation.categoryID === catID));

      const exspensesArray = filtered.map(el => el.amount);

      return (exspensesArray.length > 0) ? 
      (exspensesArray.reduce((sum, expense) => sum + expense)) :  0; 

      } else {
      return 0;
    }
  }

  const value = {
      incomeData, 
      expensesData, 
      operationsData,
      totalExpenses, 
      totalIncome, 
      // subcategoryExpensesArray, 
      // categoryExpensesArray, 
      // membersIncomeArray, 
      modalType: 'ddd',
      sumUpSubcatExpenses, 
      calculateTotalIncome
  };


  return(
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;
