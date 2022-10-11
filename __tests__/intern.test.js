const Intern = require('../libs/intern')


describe("Intern class", () => {
    describe("getName method", () => {
      it("Returns an Intern name", () => {
        const intern = new Intern("Joshua", 1, 'joshua@gmail.com','OSU');
        expect(intern.getName()).toBe('Joshua');
      });
  
    });

    describe("getID method", () => {
        it("Returns an Intern id", () => {
          const id = new Intern("Joshua", 1, 'joshua@gmail.com', 'OSU');
          expect(id.getId()).toBe(1);
        });
    
      });

      describe("getEmail method", () => {
        it("Returns an Intern email", () => {
          const email = new Intern("Joshua", 1, 'joshua@gmail.com', 'OSU');
          expect(email.getEmail()).toBe('joshua@gmail.com');
        });
    
      });

      describe("getRole method", () => {
        it("Returns an Intern role", () => {
          const role = new Intern("Joshua", 1, 'joshua@gmail.com', 'OSU');
          expect(role.getRole()).toBe('Intern');
        });
    
      });

      describe("getSchool method", () => {
        it("Returns an Intern role", () => {
          const school = new Intern("Joshua", 1, 'joshua@gmail.com', 'OSU');
          expect(school.getSchool()).toBe('OSU');
        });
    
      });


});

