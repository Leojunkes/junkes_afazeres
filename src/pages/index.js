import {
  Flex,
  Input,
  Button,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { MdDateRange } from 'react-icons/md';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');

  useEffect(() => {
    const localStorageTasks = JSON.parse(localStorage.getItem('users'));
    const tasks =
      localStorage.getItem('users') !== null ? localStorageTasks : [];
    console.log(tasks);

    setUsers([...tasks]);
  }, []);

  function handleCreateTask(e) {
    e.preventDefault();

    const newTask = {
      id: Math.random().toFixed(1),
      name: newName,
      date: newDate,
      isComplete: false,
    };
    if (!newName) {
      return;
    }
    alert('Tarefa criada, não esqueça de clicar em Salvar Tudo!');
    setUsers((oldState) => [...oldState, newTask]);
    setNewName('');
    setNewDate('');
  }
  function handleTaskCompletion(id) {
    const newTaskCompletion = users.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    console.log(newTaskCompletion);
    setUsers(newTaskCompletion);
  }
  function salvar() {
    localStorage.setItem('users', JSON.stringify(users));
    alert('Tarefas salvar com sucesso!');
  }
  function removeTasks(id) {
    const key = localStorage.key(id);
    if (localStorage.getItem(key) === id) {
      localStorage.removeItem(id);
    }

    const deleteTasks = users.filter((task) => task.id !== id);
    setUsers(deleteTasks);
  }
  function Delete() {
    localStorage.removeItem('users');
    window.location.reload();
  }
  function handleGetUsers() {
    const localStorageTasks = JSON.parse(localStorage.getItem('users'));
    const tasks =
      localStorage.getItem('users') !== null ? localStorageTasks : [];
    console.log(tasks);

    setUsers([...tasks]);
    // setUsers((users) => [...users, tasks])!==null?tasks:[];
  }

  return (
    <Flex
      mt="-20px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        mb="4"
        h="120px"
        width="95%"
        flexDirection="column"
        as="form"
        borderRadius="4"
      >
        <Flex>
          <Input
            maxWidth="100%"
            placeholder="Tarefa"
            _placeholder={{ color: 'colors.800' }}
            value={newName}
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            borderRadius="8"
            border="none"
            bg="colors.50"
          />
          <Button
            borderRadius="50px"
            colorScheme="#e5e5e5"
            size="md"
            type="button"
            onClick={handleCreateTask}
            border="none"
            ml="2"
          >
            <GoPlus color="green" fontSize="1.5rem" />
          </Button>
        </Flex>
        <Flex>
          <Input
            placeholder={{ Data: 'data' }}
            value={newDate}
            type="date"
            h="50px"
            mt="2"
            onChange={(e) => setNewDate(e.target.value)}
            borderRadius="8"
            border="none"
            bg="colors.50"
            w="100%"
          />

          <Button
            borderRadius="50px"
            colorScheme="#e5e5e5"
            size="md"
            border="none"
            ml="2"
            mt="4"
          >
            <MdDateRange fontSize="1.5rem" color="green" />
          </Button>
        </Flex>

        <Button
          border="none"
          borderRadius="8"
          onClick={salvar}
          colorScheme="green"
          size="lg"
          type="button"
          mt="2"
          h="50px"
          p="8px"
        >
          Salvar Tudo
        </Button>
        <Button
          border="none"
          borderRadius="8"
          colorScheme="red"
          size="lg"
          type="button"
          onClick={Delete}
          p="8px"
        >
          Apagar Tudo
        </Button>
      </Flex>

      <Flex
        mt="20"
        w="90%"
        boxShadow="-0.381739px 10.9934px 27px rgba(0, 0, 0, 0.10), -0.277656px 7.99596px 18.1986px rgba(0, 0, 0, 0.202344), -0.193256px 5.5654px 11.7703px rgba(0, 0, 0, 0.16875), -0.126749px 3.65014px 7.30371px rgba(0, 0, 0, 0.144531), -0.0763479px 2.19867px 4.3875px rgba(0, 0, 0, 0.125), -0.0402616px 1.15946px 2.61035px rgba(0, 0, 0, 0.105469), -0.0167011px 0.48096px 1.56094px rgba(0, 0, 0, 0.08125), -0.00387704px 0.111651px 0.82793px rgba(0, 0, 0, 0.0476562);"
      >
        <Table>
          <Thead>
            <Tr
              borderBottom="1px"
              borderColor="gray.800"
              boxShadow="-0.381739px 10.9934px 27px rgba(0, 0, 0, 0.35), -0.277656px 7.99596px 18.1986px rgba(0, 0, 0, 0.202344), -0.193256px 5.5654px 11.7703px rgba(0, 0, 0, 0.16875), -0.126749px 3.65014px 7.30371px rgba(0, 0, 0, 0.144531), -0.0763479px 2.19867px 4.3875px rgba(0, 0, 0, 0.125), -0.0402616px 1.15946px 2.61035px rgba(0, 0, 0, 0.105469), -0.0167011px 0.48096px 1.56094px rgba(0, 0, 0, 0.08125), -0.00387704px 0.111651px 0.82793px rgba(0, 0, 0, 0.0476562);"
            >
              <Th
                color="colors.900"
                fontSize="1rem"
                borderBottomColor="gray.800"
              >
                Tarefa
              </Th>
              <Th
                color="colors.900"
                fontSize="1rem"
                borderBottomColor="gray.800"
              >
                Data
              </Th>
            </Tr>
          </Thead>
          {users.map((u, key) => (
            <Tbody h="10px" bg="white" key={key}>
              <Tr
                color="colors.800"
                fontSize="1.8rem"
                fontFamily="Courgette, cursive"
              >
                <Td lineHeight="8" border="1px">
                  {u.name}
                </Td>
                <Td border="1px" fontSize="1.5rem">
                  {u.date}
                </Td>
                <Td border="1px">
                  <Button onClick={() => removeTasks(u.id)}>
                    <FiTrash2 color="#e53e3e" />
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </Flex>
    </Flex>
  );
}
