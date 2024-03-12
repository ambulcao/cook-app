import { MaterialIcons } from "@expo/vector-icons";
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { Recipe } from "@/src/components/Recipe";



export default function Recipes(){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons 
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>
      
        
      </View>

      

      <FlatList 
          data={["1"]}
          keyExtractor={(item) => item}
          renderItem={() => (
            <Recipe recipe={{ 
              name: "Omelete", 
              image: "https://img.cybercook.com.br/receitas/105/omelete-classica-1-840x480.jpeg?q=75",
              minutes: 10,
            }} />
          )}
        />
    </View>
  )
}
