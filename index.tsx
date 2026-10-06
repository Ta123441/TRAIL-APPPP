import { useMemo, useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TaskCard } from '../components/TaskCard';
import { colors, spacing } from '../constants/theme';

const initialTasks = [
  { id: '1', title: 'Finalize landing page', project: 'Website Redesign', priority: 'High' as const, done: false },
  { id: '2', title: 'Send client proposal', project: 'Acme Project', priority: 'Medium' as const, done: false },
  { id: '3', title: 'Review analytics report', project: 'Growth', priority: 'Low' as const, done: true },
  { id: '4', title: 'Prepare Monday meeting', project: 'Internal', priority: 'Medium' as const, done: false },
];

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const completed = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);

  const toggleTask = (id: string) => {
    setTasks((current) =>
      current.map((task) => task.id === id ? { ...task, done: !task.done } : task)
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>MONDAY, OCTOBER 6</Text>
            <Text style={styles.heading}>Good morning 👋</Text>
          </View>
          <Pressable onPress={() => Alert.alert('Notifications', 'You are all caught up!')} style={styles.avatar}>
            <Text style={styles.avatarText}>TZ</Text>
          </Pressable>
        </View>

        <View style={styles.hero}>
          <View style={{ flex: 1 }}>
            <Text style={styles.heroLabel}>TODAY'S PROGRESS</Text>
            <Text style={styles.heroTitle}>{completed} of {tasks.length} tasks done</Text>
            <Text style={styles.heroSub}>Keep the momentum going.</Text>
          </View>
          <View style={styles.progressRing}>
            <Text style={styles.progressText}>{Math.round((completed / tasks.length) * 100)}%</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>This week</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>04</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>86%</Text>
            <Text style={styles.statLabel}>On time</Text>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <Pressable onPress={() => Alert.alert('Add task', 'Connect this button to your backend later.')}>
            <Text style={styles.add}>+ Add</Text>
          </Pressable>
        </View>

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onToggle={toggleTask} />
        ))}

        <View style={styles.tip}>
          <Text style={styles.tipIcon}>✦</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.tipTitle}>Pro tip</Text>
            <Text style={styles.tipText}>Break large projects into small tasks to stay consistent.</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  container: { padding: spacing.lg, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 },
  eyebrow: { color: colors.muted, fontSize: 10, fontWeight: '800', letterSpacing: 1.2 },
  heading: { color: colors.text, fontSize: 27, fontWeight: '800', marginTop: 5 },
  avatar: { width: 46, height: 46, borderRadius: 16, backgroundColor: colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: colors.primary, fontWeight: '800' },
  hero: { backgroundColor: colors.dark, borderRadius: 24, padding: 22, flexDirection: 'row', alignItems: 'center' },
  heroLabel: { color: '#AEB3C8', fontSize: 10, fontWeight: '800', letterSpacing: 1 },
  heroTitle: { color: colors.white, fontSize: 20, fontWeight: '800', marginTop: 7 },
  heroSub: { color: '#AEB3C8', fontSize: 12, marginTop: 6 },
  progressRing: { width: 72, height: 72, borderRadius: 36, borderWidth: 7, borderColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginLeft: 12 },
  progressText: { color: colors.white, fontWeight: '800', fontSize: 14 },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 12, marginBottom: 26 },
  stat: { flex: 1, backgroundColor: colors.card, borderRadius: 17, padding: 14, borderWidth: 1, borderColor: colors.border },
  statNumber: { fontSize: 20, fontWeight: '800', color: colors.text },
  statLabel: { fontSize: 11, color: colors.muted, marginTop: 3 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { color: colors.text, fontSize: 19, fontWeight: '800' },
  add: { color: colors.primary, fontWeight: '800' },
  tip: { marginTop: 12, padding: 16, borderRadius: 18, backgroundColor: colors.primarySoft, flexDirection: 'row', alignItems: 'center' },
  tipIcon: { color: colors.primary, fontSize: 22, marginRight: 12 },
  tipTitle: { color: colors.text, fontWeight: '800', fontSize: 13 },
  tipText: { color: colors.muted, fontSize: 12, marginTop: 3, lineHeight: 18 },
});
