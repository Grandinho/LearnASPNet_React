using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeTracking
{
    internal class ProjectLeader: Person
    {
        public int Salary { get; set; }
        public double DailyHourRate { get; set; }

        //prop LedClients
        //prop LedProejct 

        public ProjectLeader(int id, string firstName, string lastName, int salary, double dailyHourRate): base(id,firstName,lastName)
        {
            Salary = salary;
            DailyHourRate = dailyHourRate;
        }

        public override void CreateEntry()
        {
            throw new NotImplementedException();
        }

        public override void OutputEntry()
        {
            throw new NotImplementedException();
        }
    }
}
