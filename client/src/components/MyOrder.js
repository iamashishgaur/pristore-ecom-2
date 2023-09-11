import React, { useEffect } from "react";
import ProfileLayout from "./ProfileLayout";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderAction";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/spinner/Spinner";
import { Table } from "react-bootstrap";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "../styles/commanStyle";

const MyOrder = ({ history }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, orders, error: errorOrders } = orderListMy;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      nav("/login");
    } else {
      dispatch(listMyOrders());
    }
  }, [history, userInfo, user, dispatch]);
  return (
    <>
      <ProfileLayout>
        <h1>My Orders</h1>
        {loadingOrders ? (
          <Spinner />
        ) : errorOrders ? (
          <span variant="danger">{errorOrders}</span>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <td>ID</td>
                <td>DATE</td>
                <td>TOTAL</td>
                <td>PAID</td>
                <td>DELIVERD</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <AiOutlineCloseCircle style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    {order.isDeleverd ? (
                      order.deleverdAt.substring(0, 10)
                    ) : (
                      <AiOutlineCloseCircle style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button variant="light">Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </ProfileLayout>
    </>
  );
};

export default MyOrder;
