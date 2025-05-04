import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { DateFilterComponent } from "@/components/filters/date-filter";
import { ExpenseTable } from "@/components/expenses/expense-table";
import { DateFilter } from "@shared/schema";
import { getDateFilter } from "@/lib/date-utils";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { ExpenseForm } from "@/components/expenses/expense-form";

export default function ExpensesPage() {
  const [dateFilter, setDateFilter] = useState<DateFilter>(
    getDateFilter("this_month")
  );
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const handleDateFilterChange = (filter: DateFilter) => {
    setDateFilter(filter);
  };

  const handleAddExpense = () => {
    setIsAddExpenseOpen(true);
  };

  const handleCloseAddExpense = () => {
    setIsAddExpenseOpen(false);
  };

  return (
    <Layout
      title="Expenses"
      subtitle="Manage and track all your company expenses"
    >
      {/* Date Filter */}
      <DateFilterComponent onFilterChange={handleDateFilterChange} />

      {/* Add New Expense Button */}
      <div className="my-4">
        <Button onClick={handleAddExpense}>Add New Expense</Button>
      </div>

      {/* Add Expense Dialog */}
      <Dialog isOpen={isAddExpenseOpen} onClose={handleCloseAddExpense}>
        <ExpenseForm onClose={handleCloseAddExpense} />
      </Dialog>

      {/* Expenses Table */}
      <ExpenseTable dateFilter={dateFilter} />
    </Layout>
  );
}
