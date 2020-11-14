import React from 'react'
import Button from '../../components/Button/Button';
import { FormContainer } from '../../components/FormElements/WrappedFormElements';
import Input from '../../components/Input/Input';
import { getTodoById } from '../../services/api';

const TodoDetail = () => {
    const { todoId } = useParams();
    const [todo, setTodo] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const init = async () => {
            try {
                const { data } = await getTodoById(todoId);
                setTodo(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        init();
    }, [])


    useEffect(() => {

        const init = async () => {
            try {
                const { data } = await updateTodo(todoId);
                setTodo(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        init();
    }, [todoId])


    const handleIsDone = (bool) => {
        setTodo({
            title,
            isDone: bool,
            user,
        });
    }
    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (
        <div>

        <p>{todo.title}</p>
        <p>{todo.isDone ? 'Yapıldı': 'Yapılmadı'}</p>
        <p>{todo.user}</p>



            <FormContainer onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="todo[title]"
                    placeholder="Title"
                    autoComplete="off"
                    value={todo.title}
                    onChange={(event) => {
                        setTodo({
                            ...todo,
                            title: event.target.value,
                        });
                    }}
                />

                <Input
                    type="text"
                    name="post[body]"
                    placeholder="Body"
                    autoComplete="off"
                    value={todo.user}
                    onChange={(event) => {
                        setPost({
                            ...post,
                            isDone: false,
                            user: event.target.value,
                        });
                    }}
                />

                <Button text='Yapıldı' onClick={handleIsDone(true)} />
                <Button text='Yapılmadı' onClick={handleIsDone(false)} />
                <Button text="Bitti" type="submit" />
            </FormContainer>

        </div>
    )
}


export default TodoDetail
