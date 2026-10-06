import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../constants/theme';

type Task = {
  id: string;
  title: string;
  project: string;
  priority: 'High' | 'Medium' | 'Low';
  done: boolean;
};

export function TaskCard({
  task,
  onToggle,
}: {
  task: Task;
  onToggle: (id: string) => void;
}) {
  return (
    <Pressable onPress={() => onToggle(task.id)} style={styles.card}>
      <View style={[styles.check, task.done && styles.checkDone]}>
        {task.done ? <Text style={styles.checkMark}>✓</Text> : null}
      </View>

      <View style={styles.body}>
        <Text style={[styles.title, task.done && styles.titleDone]}>
          {task.title}
        </Text>
        <Text style={styles.project}>{task.project}</Text>
      </View>

      <View
        style={[
          styles.badge,
          task.priority === 'High'
            ? styles.high
            : task.priority === 'Medium'
              ? styles.medium
              : styles.low,
        ]}
      >
        <Text style={styles.badgeText}>{task.priority}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 18,
    padding: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  check: {
    width: 25,
    height: 25,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#D7DAE3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkDone: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkMark: {
    color: colors.white,
    fontWeight: '800',
    fontSize: 15,
  },
  body: { flex: 1, marginLeft: 12 },
  title: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: colors.muted,
  },
  project: {
    marginTop: 4,
    color: colors.muted,
    fontSize: 12,
  },
  badge: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 10,
  },
  high: { backgroundColor: '#FDECEC' },
  medium: { backgroundColor: colors.warningSoft },
  low: { backgroundColor: colors.successSoft },
  badgeText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.text,
  },
});
