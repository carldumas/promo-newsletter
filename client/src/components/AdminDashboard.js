// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
// Components
import { ContentWrapper } from './ContentWrapper';
// Configs
import { auth, firestore } from '../firebase';

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

  return !users.length === 0 ? (
    <ContentWrapper>
      <div>
        <div>
          <h1 style={{ display: 'inline' }}>Email List</h1>
          <Button style={{ float: 'right' }} onClick={() => auth.signOut()}>
            Sign out
          </Button>
        </div>
        <TextContainer>
          <hr className="horizontale-rule" />
          <h3 style={{ padding: '20px 0 20px' }}>
            There are currently no item in your list!
          </h3>
        </TextContainer>
      </div>
    </ContentWrapper>
  ) : (
    <ContentWrapper>
      <div>
        <div>
          <h1 style={{ display: 'inline' }}>Email List</h1>
          <Button style={{ float: 'right' }} onClick={() => auth.signOut()}>
            Sign out
          </Button>
        </div>
        <TextContainer>
          <hr className="horizontale-rule" />
          <h3 style={{ padding: '20px 0 20px' }}>
            You're about to send a promotion newsletter to the following list:
          </h3>
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
                          onClick={() => {
                            if (
                              window.confirm(
                                'Are you sure you wish to delete this item?'
                              )
                            )
                              deleteUser(user.id);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </EmailItems>
            <div>
              <br />
              <Button onClick={handleSubmit}>Send promotion</Button>
            </div>
          </EmailWrapper>
        </TextContainer>
      </div>
    </ContentWrapper>
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

const Button = styled.button`
  padding: 10px 20px;
  background-color: #575555;
  border: 1px solid #ddd;
  color: white;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #383838;
  }
`;

export default AdminDashboard;
