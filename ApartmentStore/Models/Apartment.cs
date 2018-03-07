using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApartmentStore.Models
{
    public class Apartment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public long Price { get; set; }
        public string Owner { get; set; }
    }
}