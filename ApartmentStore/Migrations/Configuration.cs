namespace ApartmentStore.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ApartmentStore.Models.ApartmentDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(ApartmentStore.Models.ApartmentDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Apartments.AddOrUpdate(
                a => a.Name,
                new Apartment
                {
                    Name = "Can ho so 1",
                    Address = "Ba Dinh",
                    Price = 1500000000,
                    Owner = "Nguyen van A",
                },
                 new Apartment
                 {
                     Name = "Can ho so 2",
                     Address = "Hoan Kiem",
                     Price = 1300000000,
                     Owner = "Nguyen van B",
                 },
                  new Apartment
                  {
                      Name = "Can ho so 3",
                      Address = "Hoang Mai",
                      Price = 2500000000,
                      Owner = "Nguyen van C",
                  },
                   new Apartment
                   {
                       Name = "Can ho so 4",
                       Address = "Thanh Xuan",
                       Price = 3500000000,
                       Owner = "Nguyen van D",
                   },
                    new Apartment
                    {
                        Name = "Can ho so 5",
                        Address = "Tu Liem",
                        Price = 1200000000,
                        Owner = "Nguyen van E",
                    }
                );
        }
    }
}
