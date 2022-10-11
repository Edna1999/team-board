const Employee = require('../libs/employee')


describe("Employee class", () => {
    describe("getName method", () => {
      it("Returns an employee name", () => {
        const employee = new Employee("Joshua", 1, 'joshua@gmail.com', 1234567890,'josh123', 'OSU');
        expect(employee.getName()).toBe('Joshua');
      });
  
    });

    describe("getID method", () => {
        it("Returns an employee id", () => {
          const id = new Employee("Joshua", 1, 'joshua@gmail.com', 1234567890,'josh123', 'OSU');
          expect(id.getId()).toBe(1);
        });
    
      });

      describe("getEmail method", () => {
        it("Returns an employee email", () => {
          const email = new Employee("Joshua", 1, 'joshua@gmail.com', 1234567890, 'josh123', 'OSU');
          expect(email.getEmail()).toBe('joshua@gmail.com');
        });
    
      });

      describe("getRole method", () => {
        it("Returns an employee role", () => {
          const role = new Employee("Joshua", 1, 'joshua@gmail.com', 1234567890,'josh123', 'OSU');
          expect(role.getRole()).toBe('Employee');
        });
    
      });

});

