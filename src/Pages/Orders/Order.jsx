// 
import React, { useEffect, useContext, useState } from 'react';
import Layout from '../Landing/layOut/layout';
import { db } from '../../utilities/firebase';
import { DataContext } from "../../Componenets/DataProvider/DataProvider";
import classes from './Order.module.css';
import ProductCard from '../../Componenets/Products/ProductCard';

function Order() {
  const [{ user }, dispatch] = useContext(DataContext);
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })));
        });
    }
  }, [user]);

  return (
    <div>
      <Layout>
        <section className={classes.container}>
          <div className={classes.orders_container}>
            <h2>Your Orders</h2>
            {
              Orders.length===0 && <div>  <p style={{padding:"20px"}}>you don't have orders yet </p> </div> 
            }
            {/* orders */}
            <div>
              {Orders?.map((eachOrder, i) => (
                <div key={eachOrder.id}>
                  <hr />
                  <p style={{padding:"20px"}}>Order ID: {eachOrder?.id}</p>
                  {eachOrder?.data?.basket?.map((order) => (
                    <ProductCard flex={true} prod={order} key={order.id} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Order;
