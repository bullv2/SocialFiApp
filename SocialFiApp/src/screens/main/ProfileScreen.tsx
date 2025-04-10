import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const userStats = {
    posts: 156,
    followers: 1243,
    following: 567,
  };

  const recentActivity = [
    {
      id: 1,
      type: 'post',
      content: 'Just shared my thoughts on Web3 social networks',
      timeAgo: '2h ago',
    },
    {
      id: 2,
      type: 'like',
      content: 'Liked a post about DeFi protocols',
      timeAgo: '4h ago',
    },
    {
      id: 3,
      type: 'follow',
      content: 'Started following @blockchain_dev',
      timeAgo: '1d ago',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?u=user123' }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>@web3enthusiast</Text>
          <Text style={styles.bio}>Blockchain developer | Web3 enthusiast | Building the future of social media</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.posts}</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{userStats.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>

          <View style={styles.actionButtons}>
            <Button
              title="Edit Profile"
              onPress={() => console.log('Edit Profile')}
              variant="outline"
              size="medium"
            />
            <Button
              title="Share Profile"
              onPress={() => console.log('Share Profile')}
              variant="secondary"
              size="medium"
            />
          </View>
        </View>

        <Card variant="filled" style={styles.activitySection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <TouchableOpacity>
              <Ionicons name="filter-outline" size={24} color={theme.colors.text.secondary} />
            </TouchableOpacity>
          </View>
          {recentActivity.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Ionicons
                  name={
                    activity.type === 'post'
                      ? 'document-text-outline'
                      : activity.type === 'like'
                      ? 'heart-outline'
                      : 'person-add-outline'
                  }
                  size={20}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>{activity.content}</Text>
                <Text style={styles.activityTime}>{activity.timeAgo}</Text>
              </View>
            </View>
          ))}
        </Card>

        <Card variant="filled" style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills & Interests</Text>
          <View style={styles.skillsContainer}>
            {['Blockchain', 'Web3', 'DeFi', 'NFTs', 'Smart Contracts', 'Solidity'].map((skill) => (
              <View key={skill} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  } as ViewStyle,
  header: {
    alignItems: 'center',
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.surface,
  } as ViewStyle,
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: theme.borderRadius.round,
    marginBottom: theme.spacing.md,
  } as ImageStyle,
  username: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  bio: {
    ...theme.typography.body,
    textAlign: 'center',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
  } as TextStyle,
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: theme.spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.border,
  } as ViewStyle,
  statItem: {
    alignItems: 'center',
  } as ViewStyle,
  statNumber: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
  } as TextStyle,
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing.md,
    marginTop: theme.spacing.lg,
    width: '100%',
  } as ViewStyle,
  activitySection: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
  } as TextStyle,
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  } as ViewStyle,
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  } as ViewStyle,
  activityContent: {
    flex: 1,
  } as ViewStyle,
  activityText: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  activityTime: {
    ...theme.typography.small,
    color: theme.colors.text.light,
  } as TextStyle,
  skillsSection: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.sm,
  } as ViewStyle,
  skillTag: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.round,
  } as ViewStyle,
  skillText: {
    ...theme.typography.caption,
    color: theme.colors.primary,
  } as TextStyle,
});

export default ProfileScreen; 