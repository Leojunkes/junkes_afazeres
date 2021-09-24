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
} from '@chakra-ui/react';
import { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
export default function Home() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newDate, setNewDate] = useState('');

  function handleCreateTask(e) {
    e.preventDefault();

    const newTask = {
      id: Math.random().toFixed(1),
      name: newName,
      date: newDate,
    };
    if (!newName) {
      return;
    }

    setUsers((oldState) => [...oldState, newTask]);
    setNewName('');
    setNewDate('');
  }
  function salvar() {
    localStorage.setItem('users', JSON.stringify(users));
    alert(onbeforeunload('dados salvos com sucesso!'));
  }
  function removeTasks(id) {
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
      mt="-50px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      
      <Flex
        mb="4"
        h="120px"
        width="95%"
        background="gray.300"
        flexDirection="column"
        as="form"
        borderRadius="4"
      >
        <Flex>
          <Input
            maxWidth="100%"
            placeholder="Tarefa"
            value={newName}
            type="text"
            onChange={(e) => setNewName(e.target.value)}
            borderRadius="none"
          />
          <Button
        borderRadius="50px"
        colorScheme="#e5e5e5"
        size="md"
        type="button"
        onClick={handleCreateTask}
        
        
        border="none"
      >
        <GoPlus color="green" />
      </Button>
        </Flex>

        <Input
          placeholder="Data"
          value={newDate}
          type="date"
          onChange={(e) => setNewDate(e.target.value)}
          borderRadius="none"
        />
        <Button
          border="none"
          borderRadius="none"
          onClick={salvar}
          colorScheme="green"
          size="md"
          type="button"
        >
          Salvar Tudo
        </Button>
        <Button
          border="none"
          borderRadius="none"
          colorScheme="red"
          size="md"
          type="button"
          onClick={Delete}
        >
          Apagar Tudo
        </Button>
      </Flex>
      <Button
        border="none"
        onClick={handleGetUsers}
        colorScheme="green"
        size="md"
        type="button"
      >
        abrir tarefas
      </Button>
      <Flex background="gray.100">
        <Table>
          <Thead>
            <Tr>
              <Th>Tarefa</Th>
              <Th>Data</Th>
            </Tr>
          </Thead>
          {users.map((u, key) => (
            <Tbody h="10px" bg="white" key={key}>
              <Tr>
                <Td>{u.name}</Td>
                <Td>{u.date}</Td>
                <Td>
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
