using DescendingOrder;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DescendingOrderTestProj
{
    [TestClass]
    public class OrderTest
    {
        [TestMethod]
        public void DescendingOrderTest()
        {
            //Arrange 
            ReverseOrder ro = new ReverseOrder();

            //Act
            int reversedResult = ro.Descending(7348892);

            //Assert
            Assert.AreEqual(9887432, reversedResult); 
        }
    }
}
