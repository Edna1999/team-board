const Engineer = require('../libs/engineer')


describe("Engineer class", () => {
    describe("getName method", () => {
      it("Returns an Engineer name", () => {
        const engineer = new Engineer("Joshua", 1, 'joshua@gmail.com', 'josh123');
        expect(engineer.getName()).toBe('Joshua');
      });
  
    });

    describe("getID method", () => {
        it("Returns an Engineer id", () => {
          const id = new Engineer("Joshua", 1, 'joshua@gmail.com', 'josh123');
          expect(id.getId()).toBe(1);
        });
    
      });

      describe("getEmail method", () => {
        it("Returns an Engineer email", () => {
          const email = new Engineer("Joshua", 1, 'joshua@gmail.com', 'josh123');
          expect(email.getEmail()).toBe('joshua@gmail.com');
        });
    
      });

      describe("getRole method", () => {
        it("Returns an Engineer role", () => {
          const role = new Engineer("Joshua", 1, 'joshua@gmail.com', 'josh123');
          expect(role.getRole()).toBe('Engineer');
        });
    
      });

      describe("getGithub method", () => {
        it("Returns an Engineer role", () => {
          const github = new Engineer("Joshua", 1, 'joshua@gmail.com', 'josh123');
          expect(github.getGithub()).toBe('josh123');
        });
    
      });


});

