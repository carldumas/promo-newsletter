// Libraries
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';
// Components
import { ContentWrapper } from './ContentWrapper';
import Button from './Button';
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
    if (
      window.confirm(
        'Are you sure you wish to send promotions email to the following list?'
      )
    )
      fetch('/send-promo', {
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
    alert('Promotions email sent!');
  };

  return !users.length === 0 ? (
    <ContentWrapper>
      <div>
        <div>
          <h1 style={{ display: 'inline' }}>Email List</h1>
          <Button
            style={{ float: 'right', padding: '10px 20px' }}
            onClick={() => auth.signOut()}
          >
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
          <Button
            style={{ float: 'right', padding: '10px 20px' }}
            onClick={() => auth.signOut()}
          >
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
                  <ItemContentWrapper>
                    <ItemUsertWrapper>
                      <div>{user.fullname}</div>
                      <div>{user.email}</div>
                    </ItemUsertWrapper>
                    <ItemIconWrapper>
                      <BsTrash
                        style={{
                          cursor: 'pointer',
                          width: '20px',
                          height: '20px',
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
                    </ItemIconWrapper>
                  </ItemContentWrapper>
                </Item>
              ))}
            </EmailItems>
            <div>
              <br />
              <Button style={{ padding: '10px 20px' }} onClick={handleSubmit}>
                Send promotion
              </Button>
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

const ItemContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ItemUsertWrapper = styled.div`
  flex-basis: 100%;
`;

const ItemIconWrapper = styled.div`
  margin: 0 5px;
  height: 30px;
  &:hover {
    color: red;
  }
`;

export default AdminDashboard;
