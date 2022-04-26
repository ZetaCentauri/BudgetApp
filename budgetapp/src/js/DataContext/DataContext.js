import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({children}) {

  const [incomeData, setIncomeData] = useState([])
  const [expensesData, setExpensesData] = useState([]);
  const [operationsData, setOperationsData] = useState([]);

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

      

  const membersIncomeArray = incomeData
  .map(({ income }) => (income
    .reduce((sum, item)=>sum+item)));

  const totalIncome = membersIncomeArray
    .reduce((total, income)=>total+income, 0);

      
      // function sumUpSubcategoryExpenses sums all operations in the corresponding Category or Subcategory
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


          
      // const subcategoryExpensesArray = expensesData.map(category=>category.expenses);

      // const categoryExpensesArray = subcategoryExpensesArray
      // .map(subcategoryExpenses=>subcategoryExpenses
      // .reduce((sum, expense)=>sum+expense));

      // const totalExpenses = categoryExpensesArray
      // .reduce((sum, expense)=>sum+expense, 0);
     



  const value = {
      incomeData, 
      expensesData, 
      operationsData,
      // totalExpenses, 
      // totalIncome, 
      // subcategoryExpensesArray, 
      // categoryExpensesArray, 
      // membersIncomeArray, 
      modalType: 'ddd',
      sumUpSubcatExpenses
  };


  return(
    <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
    )
}

export default DataContext;
