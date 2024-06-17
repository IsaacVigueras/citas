import React, {FunctionComponent} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {PacienteProps} from '../interfaces';
import {formatDate} from '../helpers';

const Paciente: FunctionComponent<PacienteProps> = ({
  item,
  setModalVisible,
  editById,
  deleteById,
  onPress,
  setPaciente,
}) => {
  const handleEdit = () => {
    setModalVisible(true);
    editById(item.id);
  };

  return (
    <Pressable
      onPress={() => {
        onPress(true);
        setPaciente(item);
      }}>
      <View style={styles.container}>
        <Text style={styles.label}>Pacente:</Text>
        <Text style={styles.text}>{item.paciente}</Text>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
        <View style={styles.wrapperBtn}>
          <Pressable onPress={handleEdit} style={[styles.btn, styles.edit]}>
            <Text style={styles.btnText}>Editar</Text>
          </Pressable>
          <Pressable
            onPress={() => deleteById(item.id)}
            style={[styles.btn, styles.delete]}>
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
    padding: 20,
    marginHorizontal: 40,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#94A3B8',
    shadowOpacity: 10,
    shadowOffset: {height: 10, width: 15},
    shadowRadius: 10,
    elevation: 10,
  },
  label: {
    color: '#374151',
    fontWeight: '700',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  text: {
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  date: {
    color: '#374151',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#ffff',
  },
  edit: {
    backgroundColor: '#F59E0B',
  },
  delete: {
    backgroundColor: '#EF4444',
  },
});

export default Paciente;
