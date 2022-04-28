import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {

  const [incomeData, setIncomeData] = useState([])
  const [expensesData, setExpensesData] = useState([]);
  const [operationsData, setOperationsData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] =useState(0);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);
  const [modalType, setModalType] = useState("none");


  useEffect(() => {
        Promise.all ([
          fetch(`http://localhost:3005/membersIncome?month=${month}&&year=${year}`), 
          fetch("http://localhost:3005/categories"),
          fetch(`http://localhost:3005/operations?month=${month}&&year=${year}`)
          ]).then((result) => {
            return Promise.all(result.map(r=>r.json()))
            }).then(([data1, data2, data3]) => {
                setIncomeData(data1);
                setExpensesData(data2);
                setOperationsData(data3);
              });      
             
      }, [month, year]);

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
      setTotalIncome(0);
      return 0;
    }
  }

  useEffect(()=>{
    calculateTotalExpenses(operationsData);
  },[operationsData, month]);

  const calculateTotalExpenses = (data) => {
    const operationsAmountArray = data.map(operation => operation.amount);
    if (operationsAmountArray.length > 0) {
      const total = operationsAmountArray.reduce((total, amount)=> total+amount);
      setTotalExpenses(total);
      return total;
    } else {
      setTotalExpenses(0);
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
      console.log("LIczę") 

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
      modalType,
      setModalType,
      month,
      setMonth,
      year,
      setYear,
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
