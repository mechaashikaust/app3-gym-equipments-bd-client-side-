import React from 'react';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'pink' }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

const Blog = () => {
    return (
        <Accordion className='marginTop text-center' defaultActiveKey="0">

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0"> Difference between javascript and nodejs</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">

                    <Card.Body>
                        <h4 className='text-dark'>

                            JavaScript is a programming language used to make webpages interactive and runs in the browser. Node.js, an open source server framework, uses JavaScript on the server to create web pages/applications.
                        </h4>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="1">When should you use nodejs and when should you use mongodb ?</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <h4 className='text-dark'>
                            MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives you a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.

                            NodeJS's responsibilty is especially to execute your application.
                        </h4>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="2">Differences between sql and nosql databases.
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <h4 className='text-dark'>
                            SQL databases are vertically scalable where as the NoSQL databases are horizontally scalable. <br></br>
                            SQL databases are table based databases where as NoSQL databases are document based, key-value pairs, graph databases or wide-column stores.<br></br>
                            On a high-level, we can classify SQL databases as either open-source or closed-sourced from commercial vendors. NoSQL databases can be classified on the basis of way of storing data as graph databases, key-value store databases, document store databases, column store database and XML databases.<br></br>
                        </h4>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card>
                <Card.Header>
                    <CustomToggle eventKey="3">What is the purpose of jwt and how does it work?
                    </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <h4 className='text-dark'>
                            A JWT token brings authentication / authorization to its bearer. It is not encrypted. To prevent someone stealing the token, SSL is your best option.

                            For instance, during login the user sends a user/password to the server. The server checks the password, and sends a token to the user.

                        </h4>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};

export default Blog;