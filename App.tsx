import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Formulario from './src/components/Formulario';
import {typeData} from './src/interfaces';
import Paciente from './src/components/Paciente';
import Info from './src/components/Info';

function App(): React.JSX.Element {
  const [modalInfo, setModalInfo] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<typeData[]>([]);
  const [paciente, setPaciente] = useState<typeData>();

  const nuevaCitaHandler = () => {
    modalVisible && paciente?.id && setPaciente(undefined);
    setModalVisible(!modalVisible);
  };

  const editById = (id: number) => {
    const findData = data.find(pacient => pacient.id === id);

    setPaciente(findData);
  };

  const deleteById = (id: number) => {
    Alert.alert(
      `¿Deseas eliminar al paciente con ID: ${id}?`,
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Si, Continuar',
          onPress: () => {
            const filterData = data.filter(pacient => pacient.id !== id);
            setData(filterData);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Administrador de Citas {''}
        <Text style={styles.titleBold}>Veterinaria</Text>
      </Text>
      <Pressable style={styles.btnNuevaCita} onPress={nuevaCitaHandler}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {!data.length ? (
        <Text style={styles.emtyData}>No hay pacientes aún</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <Paciente
              item={item}
              onPress={setModalInfo}
              editById={editById}
              deleteById={deleteById}
              setModalVisible={setModalVisible}
              setPaciente={setPaciente}
            />
          )}
        />
      )}
      <Info
        data={paciente}
        isOpen={modalInfo}
        setModalInfo={setModalInfo}
        setPaciente={setPaciente}
      />
      {modalVisible && (
        <Formulario
          data={data}
          defaultData={paciente}
          setData={setData}
          modalVisible={modalVisible}
          onClose={nuevaCitaHandler}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  titleBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  emtyData: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  list: {
    marginTop: 50,
  },
});

export default App;
