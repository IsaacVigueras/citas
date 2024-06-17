import React, {FunctionComponent} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InfoProps} from '../interfaces';
import {formatDate} from '../helpers';

const Info: FunctionComponent<InfoProps> = ({
  isOpen,
  data,
  setModalInfo,
  setPaciente,
}) => {
  return (
    <Modal animationType="fade" visible={isOpen}>
      <SafeAreaView style={styles.container}>
        {!data?.id ? (
          <View style={styles.emptyData}>Empty Data</View>
        ) : (
          <>
            <Text style={styles.title}>
              Información {''}
              <Text style={styles.titleBold}>Paciente</Text>
            </Text>
            <View>
              <Pressable
                style={styles.btnClose}
                onPress={() => {
                  setModalInfo(false);
                  setPaciente(undefined);
                }}>
                <Text style={styles.btnCloseText}>X Cerrar</Text>
              </Pressable>
            </View>
            <View style={styles.content}>
              <View style={styles.field}>
                <Text style={styles.label}>Nombre:</Text>
                <Text style={styles.value}>{data.paciente}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Propietario:</Text>
                <Text style={styles.value}>{data.propietario}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{data.email}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Telefono:</Text>
                <Text style={styles.value}>{data.phoneNumber}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Fecha Alta:</Text>
                <Text style={styles.value}>{formatDate(data.date)}</Text>
              </View>
              <View style={styles.field}>
                <Text style={styles.label}>Telefono:</Text>
                <Text style={styles.value}>{data.sintomas}</Text>
              </View>
            </View>
          </>
        )}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    flex: 1,
  },
  emptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  btnClose: {
    marginVertical: 30,
    backgroundColor: '#E06900',
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
  },
  btnCloseText: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  content: {
    backgroundColor: '#ffff',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  field: {
    marginBottom: 10,
  },
  label: {
    textTransform: 'uppercase',
    color: '#374151',
    fontWeight: '600',
    fontSize: 12,
  },
  value: {
    fontWeight: '700',
    fontSize: 20,
    color: '#334155',
  },
});

export default Info;
