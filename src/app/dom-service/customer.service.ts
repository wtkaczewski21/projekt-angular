import { Customer } from '../models/Customer';

export class CustomerService {
    private customers: Customer[] = [
        new Customer(1, 'Remus', 'Lupin'),
        new Customer(2, 'Aragorn', 'Elessar'),
        new Customer(3, 'John', 'Snow'),
    ]

    getCustomers() {
        return this.customers.slice();
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    deleteCustomer(id: number) {
        this.customers = this.customers.filter(customer => customer.id !== id);
    }
}