import { View, useWindowDimensions } from "react-native";
import { Text } from "~/components/ui/text";
import { Link } from "expo-router";

const Sidebar = () => {
  const { width } = useWindowDimensions();
  const isMobile = width < 768; // Common breakpoint for mobile devices

  if (isMobile) {
    return null; // Don't render sidebar on mobile
  }

  return (
    <View className="w-64 h-screen bg-background border-r border-border">
      <View className="p-4">
        <Text className="text-xl font-bold">App Name</Text>
      </View>
      <View className="flex-1">
        <Link href="/" className="block p-4 hover:bg-muted">
          <Text>Home</Text>
        </Link>
        <Link href="/profile" className="block p-4 hover:bg-muted">
          <Text>Profile</Text>
        </Link>
        <Link href="/settings" className="block p-4 hover:bg-muted">
          <Text>Settings</Text>
        </Link>
      </View>
    </View>
  );
};

export default Sidebar;
