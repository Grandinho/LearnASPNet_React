using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeTracking
{
    internal class Partner : Customer
    {
        public decimal PartnerDiscount { get; set; }
        public Partner(int id, string contactPersonFirstName, string contactPersonLastName, string location, int budget, string companyName, int hourRate, decimal partnerDiscount) : base(id, contactPersonFirstName, contactPersonLastName, location, budget, companyName, hourRate)
        {
            PartnerDiscount = partnerDiscount;
        }

        public override decimal CalculateHourPrice()
        {
            return base.CalculateHourPrice() * (1-PartnerDiscount);
        }
    }
}
