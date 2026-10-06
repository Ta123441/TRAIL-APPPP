import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../constants/theme';

const projects = [
  ['Website Redesign', '68%', '12 tasks'],
  ['Acme Mobile App', '42%', '08 tasks'],
  ['Growth Campaign', '91%', '06 tasks'],
  ['Internal Systems', '25%', '14 tasks'],
];

export default function Explore() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>WORKSPACE</Text>
        <Text style={styles.heading}>Your projects</Text>
        <Text style={styles.sub}>Keep every project moving in one place.</Text>

        {projects.map(([name, progress, count]) => (
          <View key={name} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.projectIcon}><Text style={styles.iconText}>{name[0]}</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.count}>{count}</Text>
              </View>
              <Text style={styles.percent}>{progress}</Text>
            </View>
            <View style={styles.track}>
              <View style={[styles.fill, { width: progress }]} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: 40 },
  eyebrow: { color: colors.primary, fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
  heading: { color: colors.text, fontSize: 28, fontWeight: '800', marginTop: 5 },
  sub: { color: colors.muted, marginTop: 7, marginBottom: 24 },
  card: { backgroundColor: colors.card, borderRadius: 20, padding: 18, marginBottom: 12, borderWidth: 1, borderColor: colors.border },
  row: { flexDirection: 'row', alignItems: 'center' },
  projectIcon: { width: 44, height: 44, borderRadius: 14, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  iconText: { color: colors.primary, fontWeight: '900', fontSize: 18 },
  name: { color: colors.text, fontWeight: '800', fontSize: 15 },
  count: { color: colors.muted, fontSize: 11, marginTop: 3 },
  percent: { color: colors.text, fontWeight: '800' },
  track: { height: 7, backgroundColor: '#ECEEF5', borderRadius: 99, overflow: 'hidden', marginTop: 16 },
  fill: { height: '100%', backgroundColor: colors.primary, borderRadius: 99 },
});
