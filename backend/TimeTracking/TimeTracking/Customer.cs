using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeTracking
{
    internal class Customer: Person
    {
        public string Location { get; set; }
        public int Budget { get; set; }
        public string CompanyName { get; set; }
        public int HourRate { get; set; }

        public Customer(int id, string contactPersonFirstName, string contactPersonLastName, string location, int budget, string companyName, int hourRate) : base(id, contactPersonFirstName, contactPersonLastName)
        {
            Location = location;
            Budget = budget;
            CompanyName = companyName;
            HourRate = hourRate;
        }

        public virtual decimal CalculateHourPrice()
        {
            return HourRate;
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
