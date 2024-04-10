// ExpenseScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ExpenseScreen = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addExpense = () => {
    if (expenseAmount && expenseDescription) {
      setExpenses([
        ...expenses,
        { description: expenseDescription, amount: parseFloat(expenseAmount) },
      ]);
      setExpenseDescription('');
      setExpenseAmount('');
    }
  };

  const totalExpenses = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Total Expenses: {totalExpenses}</Text>
      <TextInput
        placeholder="Expense description"
        value={expenseDescription}
        onChangeText={text => setExpenseDescription(text)}
      />
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={expenseAmount}
        onChangeText={text => setExpenseAmount(text)}
      />
      <Button title="Add Expense" onPress={addExpense} />
      <View style={{ marginTop: 20 }}>
        {expenses.map((expense, index) => (
          <Text key={index}>{expense.description}: {expense.amount}</Text>
        ))}
      </View>
    </View>
  );
};

export default ExpenseScreen;
