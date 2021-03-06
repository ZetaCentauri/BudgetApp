import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {

  const [incomeData, setIncomeData] = useState([]);

  const [membersData, setMembersData] = useState([]);
  const [incomesData, setIncomesData] = useState([]);

  const [expensesData, setExpensesData] = useState([]);
  const [operationsData, setOperationsData] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] =useState(0);
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [modalType, setModalType] = useState(null);
  
  

  useEffect(() => {
  
    Promise.all ([
          fetch(`http://localhost:3005/membersIncome?month=${month}&&year=${year}`), 
          fetch("http://localhost:3005/categories"),
          fetch(`http://localhost:3005/operations?month=${month}&&year=${year}`),
          fetch("http://localhost:3005/members"),
          fetch(`http://localhost:3005/incomes?month=${month}&&year=${year}`),
          ]).then((result) => {
            return Promise.all(result.map(r=>r.json()))
            }).then(([data1, cat, oper, memb, inc]) => {
                setIncomeData(data1);

                setExpensesData(cat);
                setOperationsData(oper);
                setMembersData(memb);
                setIncomesData(inc);
                

              });       
      }, [month]);

  useEffect(()=>{
    // calculateTotalIncome(incomeData);
    calcTotalIncome(incomesData);
  },[incomesData]);

   const calcTotalIncome = (data) => {
    const incomesAmountArray = data.map(income => income.amount);
    if (incomesAmountArray.length > 0) {
      const total = incomesAmountArray.reduce((total, amount)=> total+amount);
      setTotalIncome(total);
      return total;
    } else {
      setTotalIncome(0);
      return 0;
    }
   }


  const calculateTotalIncome = (data) => {
    const allIncomes = data.map((member)=>member.incomes);
    
    const amounts = allIncomes.map((memberIncomes)=>memberIncomes.map(income=>income.amount));
    if (amounts.length){
      const mergedAmounts = amounts.reduce((array, element)=>[...array, ...element]); 
      if (mergedAmounts.length){
      const total = mergedAmounts.reduce((sum, income)=>sum+income);
      setTotalIncome(total);
      return total;
      } else {
        setTotalIncome(0);
      }
    } else {
      setTotalIncome(0);
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
      setTotalExpenses(0);
      return 0;
    }
  }

  const sumUpMemberIncomes = (memberID, jobID) => {
    if (incomesData.length > 0) {
      const filtered = jobID ? 
        incomesData.filter(income => income.memberID === memberID && income.jobID === jobID)
        : incomesData.filter(income => income.memberID === memberID);
      const memberIncomesArray = filtered.map(el => el.amount);
      
      return (memberIncomesArray.length > 0) ? 
        (memberIncomesArray.reduce((sum, income) => sum + income)) :  0; 
    } else {
      return 0;
    }
  }

  // function sumUpSubcategoryExpenses sums us all operations in the corresponding Category or Subcategory
  const sumUpSubcatExpenses = (catID, subCatID, data) => {
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
      setIncomeData,
      setExpensesData, 
      operationsData,
      setOperationsData,
      totalExpenses, 
      totalIncome, 
      modalType,
      setModalType,
      month,
      setMonth,
      year,
      setYear,
      sumUpSubcatExpenses, 
      calculateTotalIncome,

      incomesData,
      setIncomesData,
      membersData,
      setMembersData,

    sumUpMemberIncomes
  };


  return(
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;
