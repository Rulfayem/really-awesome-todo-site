import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TodoCard from "../components/TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function Home() {
    const todos = useContext(TodoContext).todos;
    return (
        <Container>
            <h1 className="my-3">Your todos</h1>
            <Row>
                <CardGroup todos={todos} />
            </Row>
        </Container>
    );
}

function CardGroup({ todos }) {
    return todos.map((todos) => {
        return (
            <Col md={4} key={todos.id}>
                <TodoCard todo={todo} />
            </Col>
        );
    });
}
