// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
// Styles
import { Wrapper } from './Styles';
// Configs
import { auth } from '../firebase.js';
import { firestore } from '../firebase';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsub = firestore.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(allUsers);
    });
    return () => {
      unsub();
    };
  }, []);

  const deleteUser = (id) => {
    firestore.collection('users').doc(id).delete();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/send-mail', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({ users }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.log('Something went wrong..', error);
      });
  };

  return (
    <Wrapper>
      <div>
        <h1>Email List</h1>
        <TextContainer>
          <hr className="horizontale-rule" />
          <p style={{ paddingTop: '20px' }}>
            You're about to send promotions newsletter to the following list:
          </p>
          <EmailWrapper>
            <EmailItems>
              {users.map((user) => (
                <Item key={user.id}>
                  <div>
                    <div>
                      <div>{user.fullname}</div>
                      <div>{user.email}</div>
                      <div>
                        <BsTrash
                          style={{
                            cursor: 'pointer',
                          }}
                          onClick={() => deleteUser(user.id)}
                        />
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </EmailItems>
            <div>
              <br />
              <button onClick={handleSubmit}>Send Promo Email</button>
            </div>
          </EmailWrapper>
        </TextContainer>
        <button onClick={() => auth.signOut()}>Admin Logout</button>
      </div>
    </Wrapper>
  );
};

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const EmailWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const EmailItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

const Item = styled.li`
  flex: 30%;
  padding: 10px;
  background: #d3d3d3;
  margin: 5px;
`;

export default AdminDashboard;
