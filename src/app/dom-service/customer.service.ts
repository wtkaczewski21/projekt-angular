import { Subject } from 'rxjs';
import { Customer } from '../models/Customer';

export class CustomerService {
    private customers: Customer[] = [
        new Customer(1, 'Remus', 'Lupin'),
        new Customer(2, 'Aragorn', 'Elessar'),
        new Customer(3, 'John', 'Snow'),
    ]

    customersChanged = new Subject<Customer[]>();
    customerId: number;

    getCustomers() {
        return this.customers.slice();
    }

    getCustomerById(id: number) {
        return this.customers.find(customer => customer.id === id)
    }

    addCustomer(customer: Omit<Customer, 'id'>) {
        let autoId;
        const lastElement = this.customers[this.customers.length - 1];
        if (lastElement !== undefined) {
            autoId = lastElement.id + 1;
        }
        else {
            autoId = 1;
        }
        this.customers.push({ ...customer, id: autoId });
    }

    updateCustomer(id: number, newCustomer: Customer) {
        let customerUpdate = this.customers.findIndex(customer => customer.id === id);
        this.customers[customerUpdate] = newCustomer;
    }

    deleteCustomer(id: number) {
        this.customerId = this.customers.findIndex(customer => customer.id === id);
        this.customers.splice(this.customerId, 1);
        this.customersChanged.next(this.customers.slice());
    }
}