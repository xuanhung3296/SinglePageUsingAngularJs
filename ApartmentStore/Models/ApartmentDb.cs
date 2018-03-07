using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApartmentStore.Models
{
    public class ApartmentDb:DbContext
    {
        public DbSet<Apartment> Apartments { get; set; }
    }
}