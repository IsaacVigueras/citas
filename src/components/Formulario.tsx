import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FormularioProps, typeData} from '../interfaces';

const Formulario: FunctionComponent<FormularioProps> = ({
  modalVisible,
  onClose,
  setData,
  data,
  defaultData,
}) => {
  const [id, setId] = useState<number>();
  const [paciente, setPaciente] = useState<string>('');
  const [propietario, setPropietario] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [sintomas, setSintomas] = useState<string>('');

  useEffect(() => {
    if (defaultData?.id) {
      setId(defaultData.id);
      setPaciente(defaultData.paciente);
      setPropietario(defaultData.propietario);
      setEmail(defaultData.email);
      setPhoneNumber(defaultData.phoneNumber);
      setDate(defaultData.date);
      setSintomas(defaultData.sintomas);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetValues = () => {
    setId(undefined);
    setPaciente('');
    setPropietario('');
    setEmail('');
    setPhoneNumber('');
    setDate(new Date());
    setSintomas('');
  };

  const handleValidates = () => {
    if (
      [paciente, propietario, email, phoneNumber, date, sintomas].includes('')
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    const newData: typeData = {
      id: id ? id : Date.now(),
      paciente,
      propietario,
      email,
      phoneNumber,
      date,
      sintomas,
    };

    if (id) {
      const changeData = data.map(item => (item.id === id ? newData : item));

      setData(changeData);
    } else {
      setData([...data, newData]);
    }

    onClose();
    resetValues();
  };

  return (
    <Modal animationType="fade" visible={modalVisible}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
          <Text style={styles.title}>
            {defaultData?.id ? 'Editar' : 'Nueva'} {''}{' '}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>
          <Pressable
            style={styles.btnCancel}
            onPress={() => {
              resetValues();
              onClose();
            }}>
            <Text style={styles.btnCancelText}>X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              onChangeText={setPaciente}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={paciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              onChangeText={setPropietario}
              placeholder="Nombre Propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={propietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholder="Email Propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={email}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              keyboardType="number-pad"
              maxLength={10}
              onChangeText={setPhoneNumber}
              placeholder="Teléfono Propietario"
              placeholderTextColor={'#666'}
              style={styles.input}
              value={phoneNumber.toString()}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.dateContainer}>
              <DatePicker
                locale="es"
                mode="date"
                date={date}
                onDateChange={(datePicker: Date) => setDate(datePicker)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              multiline
              numberOfLines={4}
              onChangeText={setSintomas}
              placeholder="Síntomas Propietario"
              placeholderTextColor={'#666'}
              style={[styles.input, styles.sintomasInput]}
              value={sintomas}
            />
          </View>
          <Pressable style={styles.btnAdd} onPress={handleValidates}>
            <Text style={styles.btnAddText}>
              {defaultData?.id ? 'Editar' : 'Agregar'} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#ffff',
  },
  titleBold: {
    fontWeight: '900',
  },
  btnCancel: {
    marginVertical: 30,
    backgroundColor: '#5827A4',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCancelText: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#ffff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#ffff',
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  dateContainer: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnAdd: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    paddingVertical: 15,
  },
  btnAddText: {
    color: '#5827A4',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Formulario;
