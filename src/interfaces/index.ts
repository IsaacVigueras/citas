import {Dispatch, SetStateAction} from 'react';

export type FormularioProps = {
  modalVisible: boolean;
  onClose: () => void;
  setData: Dispatch<SetStateAction<typeData[]>>;
  data: typeData[];
  defaultData?: typeData;
};

export type typeData = {
  id: number;
  paciente: string;
  propietario: string;
  email: string;
  phoneNumber: string;
  date: Date;
  sintomas: string;
};

export type PacienteProps = {
  item: typeData;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  onPress: Dispatch<SetStateAction<boolean>>;
  editById: (id: number) => void;
  deleteById: (id: number) => void;
  setPaciente: Dispatch<SetStateAction<typeData | undefined>>;
};

export type InfoProps = {
  isOpen: boolean;
  data: typeData | undefined;
  setModalInfo: Dispatch<SetStateAction<boolean>>;
  setPaciente: Dispatch<SetStateAction<typeData | undefined>>;
};
