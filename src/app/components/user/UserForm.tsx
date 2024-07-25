import { User } from '@/core/model/User';
import InputText from '../shared/InputText';

export interface UserFormProps {
  user: Partial<User>;
  onChange: (user: Partial<User>) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
}
export default function UserForm(props: UserFormProps) {
  return (
    <div className="flex flex-col gap-5">
      <InputText
        label="Nome"
        type="text"
        value={props.user.name}
        onChange={(e) =>
          props.onChange?.({ ...props.user, name: e.target.value })
        }
      />
      <InputText
        label="E-mail"
        type="email"
        value={props.user.email}
        onChange={(e) =>
          props.onChange?.({ ...props.user, email: e.target.value })
        }
      />
      <InputText
        label="Senha"
        type="password"
        value={props.user.password}
        onChange={(e) =>
          props.onChange?.({ ...props.user, password: e.target.value })
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button
            className="bg-blue-500 px-4 py-2 rounded-md"
            onClick={props.onSave}
          >
            Salvar
          </button>
          <button
            className="bg-zinc-500 px-4 py-2 rounded-md"
            onClick={props.onCancel}
          >
            Cancelar
          </button>
        </div>
        <button
          className="bg-red-500 px-4 py-2 rounded-md"
          onClick={props.onDelete}
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
