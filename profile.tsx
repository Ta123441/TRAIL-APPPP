import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../constants/theme';

export default function Profile() {
  const items = ['Account settings', 'Notifications', 'Appearance', 'Help & support'];
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>PROFILE</Text>
        <Text style={styles.heading}>Your account</Text>

        <View style={styles.profileCard}>
          <View style={styles.avatar}><Text style={styles.avatarText}>TZ</Text></View>
          <View>
            <Text style={styles.name}>Tanzeel</Text>
            <Text style={styles.email}>hello@example.com</Text>
          </View>
        </View>

        {items.map((item) => (
          <Pressable key={item} style={styles.item} onPress={() => Alert.alert(item, 'This screen can be connected later.')}>
            <Text style={styles.itemText}>{item}</Text>
            <Text style={styles.chevron}>›</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg },
  eyebrow: { color: colors.primary, fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
  heading: { color: colors.text, fontSize: 28, fontWeight: '800', marginTop: 5, marginBottom: 24 },
  profileCard: { backgroundColor: colors.card, borderRadius: 22, padding: 18, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, marginBottom: 16 },
  avatar: { width: 58, height: 58, borderRadius: 19, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  avatarText: { color: colors.white, fontWeight: '900', fontSize: 18 },
  name: { color: colors.text, fontSize: 17, fontWeight: '800' },
  email: { color: colors.muted, marginTop: 4, fontSize: 12 },
  item: { backgroundColor: colors.card, borderBottomWidth: 1, borderBottomColor: colors.border, padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemText: { color: colors.text, fontWeight: '600' },
  chevron: { color: colors.muted, fontSize: 25 },
});
