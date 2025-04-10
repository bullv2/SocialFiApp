import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';

const WalletScreen = () => {
  const tokenBalances = [
    {
      id: 1,
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '1.234',
      value: '$2,468.00',
      change: '+2.5%',
      isPositive: true,
    },
    {
      id: 2,
      symbol: 'SOCIAL',
      name: 'Social Token',
      balance: '500',
      value: '$250.00',
      change: '-1.2%',
      isPositive: false,
    },
    {
      id: 3,
      symbol: 'USDC',
      name: 'USD Coin',
      balance: '1000',
      value: '$1,000.00',
      change: '0%',
      isPositive: true,
    },
  ];

  const transactions = [
    {
      id: 1,
      type: 'receive',
      token: 'ETH',
      amount: '0.1',
      from: '0x1234...5678',
      timeAgo: '2h ago',
      status: 'completed',
    },
    {
      id: 2,
      type: 'send',
      token: 'SOCIAL',
      amount: '50',
      to: '0x8765...4321',
      timeAgo: '1d ago',
      status: 'completed',
    },
    {
      id: 3,
      type: 'swap',
      token: 'USDC',
      amount: '100',
      details: 'Swapped to ETH',
      timeAgo: '2d ago',
      status: 'pending',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Wallet</Text>
          <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
        </View>

        <Card variant="filled" style={styles.balanceCard}>
          <Text style={styles.totalLabel}>Total Balance</Text>
          <Text style={styles.totalAmount}>$3,718.00</Text>
          <Text style={styles.changeText}>+5.2% this week</Text>
          <View style={styles.actionButtons}>
            <Button
              title="Send"
              onPress={() => console.log('Send')}
              variant="primary"
              size="medium"
            />
            <Button
              title="Receive"
              onPress={() => console.log('Receive')}
              variant="outline"
              size="medium"
            />
          </View>
        </Card>

        <Card variant="filled" style={styles.tokensCard}>
          <Text style={styles.sectionTitle}>Your Tokens</Text>
          {tokenBalances.map((token) => (
            <View key={token.id} style={styles.tokenItem}>
              <View style={styles.tokenInfo}>
                <View style={styles.tokenHeader}>
                  <Text style={styles.tokenSymbol}>{token.symbol}</Text>
                  <Text style={styles.tokenName}>{token.name}</Text>
                </View>
                <Text style={styles.tokenValue}>{token.value}</Text>
              </View>
              <View style={styles.tokenBalance}>
                <Text style={styles.balanceAmount}>{token.balance}</Text>
                <Text style={[styles.changeAmount, token.isPositive ? styles.positiveChange : styles.negativeChange]}>
                  {token.change}
                </Text>
              </View>
            </View>
          ))}
        </Card>

        <Card variant="filled" style={styles.transactionsCard}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          {transactions.map((tx) => (
            <View key={tx.id} style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                <Ionicons
                  name={
                    tx.type === 'receive'
                      ? 'arrow-down-circle-outline'
                      : tx.type === 'send'
                      ? 'arrow-up-circle-outline'
                      : 'swap-horizontal-outline'
                  }
                  size={24}
                  color={theme.colors.primary}
                />
              </View>
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionType}>
                  {tx.type === 'receive' ? 'Received' : tx.type === 'send' ? 'Sent' : 'Swapped'} {tx.token}
                </Text>
                <Text style={styles.transactionDetails}>
                  {tx.type === 'receive' ? `From: ${tx.from}` : 
                   tx.type === 'send' ? `To: ${tx.to}` : 
                   tx.details}
                </Text>
              </View>
              <View style={styles.transactionAmount}>
                <Text style={styles.amountText}>
                  {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''}{tx.amount} {tx.token}
                </Text>
                <View style={styles.transactionStatus}>
                  <Text style={[styles.statusText, tx.status === 'pending' && styles.pendingStatus]}>
                    {tx.status}
                  </Text>
                  <Text style={styles.timeAgo}>{tx.timeAgo}</Text>
                </View>
              </View>
            </View>
          ))}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    ...theme.shadows.sm,
  } as ViewStyle,
  headerTitle: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
  } as TextStyle,
  balanceCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.lg,
    alignItems: 'center',
  } as ViewStyle,
  totalLabel: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  totalAmount: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
    marginVertical: theme.spacing.xs,
  } as TextStyle,
  changeText: {
    ...theme.typography.caption,
    color: theme.colors.success,
    marginBottom: theme.spacing.lg,
  } as TextStyle,
  actionButtons: {
    flexDirection: 'row',
    gap: theme.spacing.md,
    width: '100%',
  } as ViewStyle,
  tokensCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  } as TextStyle,
  tokenItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  } as ViewStyle,
  tokenInfo: {
    flex: 1,
  } as ViewStyle,
  tokenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  } as ViewStyle,
  tokenSymbol: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginRight: theme.spacing.xs,
  } as TextStyle,
  tokenName: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  tokenValue: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
  } as TextStyle,
  tokenBalance: {
    alignItems: 'flex-end',
  } as ViewStyle,
  balanceAmount: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.text.primary,
  } as TextStyle,
  changeAmount: {
    ...theme.typography.small,
    marginTop: theme.spacing.xs,
  } as TextStyle,
  positiveChange: {
    color: theme.colors.success,
  } as TextStyle,
  negativeChange: {
    color: theme.colors.error,
  } as TextStyle,
  transactionsCard: {
    margin: theme.spacing.md,
    padding: theme.spacing.md,
  } as ViewStyle,
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  } as ViewStyle,
  viewAllText: {
    ...theme.typography.caption,
    color: theme.colors.primary,
  } as TextStyle,
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  } as ViewStyle,
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  } as ViewStyle,
  transactionInfo: {
    flex: 1,
  } as ViewStyle,
  transactionType: {
    ...theme.typography.body,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  } as TextStyle,
  transactionDetails: {
    ...theme.typography.caption,
    color: theme.colors.text.secondary,
  } as TextStyle,
  transactionAmount: {
    alignItems: 'flex-end',
  } as ViewStyle,
  amountText: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.text.primary,
  } as TextStyle,
  transactionStatus: {
    alignItems: 'flex-end',
    marginTop: theme.spacing.xs,
  } as ViewStyle,
  statusText: {
    ...theme.typography.small,
    color: theme.colors.success,
  } as TextStyle,
  pendingStatus: {
    color: theme.colors.warning,
  } as TextStyle,
  timeAgo: {
    ...theme.typography.small,
    color: theme.colors.text.light,
  } as TextStyle,
});

export default WalletScreen; 