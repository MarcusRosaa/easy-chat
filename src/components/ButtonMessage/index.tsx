import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ButtonMessage: React.FC = () => {
  const [link, setLink] = useState('');

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const linkDocRef = doc(db, 'Link', 'mYFfzOWVhdcl12F6SCu1');
        const linkDocSnap = await getDoc(linkDocRef);
        if (linkDocSnap.exists()) {
          setLink(linkDocSnap.data().url);
        }
      } catch (error) {
        console.log('Error fetching link:', error);
      }
    };

    fetchLink();
  }, []);
  console.log(link)
  return (
    <Container>
      <a href={link}>Ver mensagens suspeitas agora</a>
    </Container>
  );
};

export default ButtonMessage;
