import { useState } from "react";
import { Layout } from "@/components/layout/layout";
import { DateFilterComponent } from "@/components/filters/date-filter";
import { ExpenseTable } from "@/components/expenses/expense-table";
import { DateFilter } from "@shared/schema";
import { getDateFilter } from "@/lib/date-utils";
import { Button } from "@/components/ui/button";
import { ExpenseForm } from "@/components/expenses/expense-form";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function ExpensesPage() {
  const [dateFilter, setDateFilter] = useState<DateFilter>(
    getDateFilter("this_month")
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
      <div className="flex justify-end my-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button onClick={handleAddExpense}>Add New Expense</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px]">
            <ExpenseForm onClose={handleCloseAddExpense} />
          </PopoverContent>
        </Popover>
      </div>

      {/* Expenses Table */}
      <ExpenseTable dateFilter={dateFilter} />
    </Layout>
  );
}
