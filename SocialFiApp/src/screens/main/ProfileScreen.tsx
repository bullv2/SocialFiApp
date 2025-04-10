import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { SocialChainList } from '../../components/SocialChain';
import { SocialChainPost } from '../../types/social';

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

  const socialChains: SocialChain[] = [
    {
      id: '1',
      title: 'My Journey to Parenthood',
      description: 'A collection of precious moments from pregnancy to raising our little one',
      startDate: new Date('2023-01-15'),
      posts: [
        {
          id: '1',
          content: 'Just found out we\'re expecting! Our lives are about to change forever. Feeling a mix of excitement and nervousness. #NewBeginnings',
          timestamp: new Date('2023-01-15'),
          likes: 245,
          comments: 89,
          reposts: 12,
          previousPostId: null,
          nextPostId: '2'
        },
        {
          id: '2',
          content: 'First ultrasound today! Seeing that tiny heartbeat was the most magical moment of our lives. Our little miracle is growing strong. #FirstTrimester',
          timestamp: new Date('2023-02-20'),
          likes: 312,
          comments: 124,
          reposts: 45,
          previousPostId: '1',
          nextPostId: '3'
        },
        {
          id: '3',
          content: 'Baby shower today! Overwhelmed by the love and support from family and friends. The nursery is coming together beautifully. #BabyShower',
          timestamp: new Date('2023-06-10'),
          likes: 456,
          comments: 178,
          reposts: 67,
          previousPostId: '2',
          nextPostId: '4'
        },
        {
          id: '4',
          content: 'Welcome to the world, our precious little one! Born at 3:24 AM, 7.2 lbs of pure joy. We\'re officially parents! #Newborn',
          timestamp: new Date('2023-09-05'),
          likes: 789,
          comments: 256,
          reposts: 123,
          previousPostId: '3',
          nextPostId: '5'
        },
        {
          id: '5',
          content: 'First family vacation with our 6-month-old! Watching them experience the ocean for the first time was priceless. #FamilyMemories',
          timestamp: new Date('2024-03-15'),
          likes: 567,
          comments: 198,
          reposts: 89,
          previousPostId: '4',
          nextPostId: null
        }
      ]
    },
    {
      id: '2',
      title: 'Career Milestones',
      description: 'From first job to leadership roles, documenting my professional growth',
      startDate: new Date('2018-06-01'),
      posts: [
        {
          id: '6',
          content: 'First day at my dream company! Nervous but excited for this new chapter. Ready to learn and grow. #CareerStart',
          timestamp: new Date('2018-06-01'),
          likes: 234,
          comments: 78,
          reposts: 23,
          previousPostId: null,
          nextPostId: '7'
        },
        {
          id: '7',
          content: 'Promoted to team lead today! Grateful for the opportunity to mentor others and make a bigger impact. #CareerGrowth',
          timestamp: new Date('2020-03-15'),
          likes: 345,
          comments: 123,
          reposts: 45,
          previousPostId: '6',
          nextPostId: '8'
        },
        {
          id: '8',
          content: 'Just completed my first major project as a manager. The team did an amazing job, and I couldn\'t be prouder. #Leadership',
          timestamp: new Date('2022-01-20'),
          likes: 456,
          comments: 167,
          reposts: 78,
          previousPostId: '7',
          nextPostId: null
        }
      ]
    },
    {
      id: '3',
      title: 'Travel Adventures',
      description: 'Exploring the world one destination at a time',
      startDate: new Date('2019-04-10'),
      posts: [
        {
          id: '9',
          content: 'First solo trip to Japan! The cherry blossoms are in full bloom, and the culture is even more beautiful than I imagined. #SoloTravel',
          timestamp: new Date('2019-04-10'),
          likes: 678,
          comments: 234,
          reposts: 156,
          previousPostId: null,
          nextPostId: '10'
        },
        {
          id: '10',
          content: 'Hiking the Inca Trail to Machu Picchu. The views are breathtaking, and the history is humbling. #BucketList',
          timestamp: new Date('2021-08-05'),
          likes: 789,
          comments: 267,
          reposts: 189,
          previousPostId: '9',
          nextPostId: '11'
        },
        {
          id: '11',
          content: 'Safari in Kenya! Witnessing the Great Migration was a once-in-a-lifetime experience. Nature is truly amazing. #Wildlife',
          timestamp: new Date('2023-07-20'),
          likes: 890,
          comments: 345,
          reposts: 234,
          previousPostId: '10',
          nextPostId: null
        }
      ]
    }
  ];

  const handlePostPress = (post: SocialChainPost) => {
    // Navigate to post detail view
    console.log('Post pressed:', post);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Sarah Johnson</Text>
          <Text style={styles.bio}>Documenting life's precious moments and creating memories that last a lifetime</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.2K</Text>
              <Text style={styles.statLabel}>Moments</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>5.8K</Text>
              <Text style={styles.statLabel}>Connections</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12.3K</Text>
              <Text style={styles.statLabel}>Engagements</Text>
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

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Social Chains</Text>
          <TouchableOpacity>
            <Ionicons name="add-circle-outline" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        {socialChains.map((chain) => (
          <SocialChainList
            key={chain.id}
            chain={chain}
            onPostPress={handlePostPress}
          />
        ))}
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
  name: {
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
  statValue: {
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
    margin: theme.spacing.md,
    marginBottom: theme.spacing.sm,
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