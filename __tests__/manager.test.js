const Manager = require('../libs/manager')


describe("Manager class", () => {
    describe("getName method", () => {
      it("Returns a Manager name", () => {
        const employee = new Manager("Joshua", 1, 'joshua@gmail.com', 1234567890);
        expect(employee.getName()).toBe('Joshua');
      });
  
    });

    describe("getID method", () => {
        it("Returns a Manager id", () => {
          const id = new Manager("Joshua", 1, 'joshua@gmail.com',1234567890);
          expect(id.getId()).toBe(1);
        });
    
      });

      describe("getEmail method", () => {
        it("Returns a Manager email", () => {
          const email = new Manager("Joshua", 1, 'joshua@gmail.com', 1234567890);
          expect(email.getEmail()).toBe('joshua@gmail.com');
        });
    
      });

      describe("getOfficeNum method", () => {
        it("Returns a Manager office number", () => {
          const officeNum = new Manager("Joshua", 1, 'joshua@gmail.com', 1234567890);
          expect(officeNum.getOfficeNum()).toBe(1234567890);
        });
    
      });


      describe("getRole method", () => {
        it("Returns a Manager role", () => {
          const role = new Manager("Joshua", 1, 'joshua@gmail.com', 1234567890);
          expect(role.getRole()).toBe('Manager');
        });
    
      });


      });



