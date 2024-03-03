using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeTracking
{
    public abstract class Person
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Person(int id, string firstName, string lastName)
        {
            ID = id;
            FirstName = firstName;  
            LastName = lastName;
        }

        public abstract void CreateEntry();
        public abstract void OutputEntry();

    }
}
