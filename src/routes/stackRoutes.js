import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Home } from "../screens/index";
import { SearchTickets } from "../screens/searchTickets";
import { OpenTickets } from "../screens/openTickets";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OpenTickets"
        component={OpenTickets}
        options={{ title: "ABRIR NOVO CHAMADO" }}
      />
      <Stack.Screen
        name="SearchTickets"
        component={SearchTickets}
        options={{ title: "CONSULTA DE CHAMADOS" }}
      />
    </Stack.Navigator>
  );
}
