// Sample data for reports
export const salesData = {
  monthly: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 60, 75, 85, 90],
        borderColor: '#15566C',
        backgroundColor: 'rgba(21, 86, 108, 0.1)',
        fill: true
      },
      {
        label: 'Sales 2023',
        data: [45, 40, 60, 70, 45, 50, 35, 40, 50, 65, 75, 80],
        borderColor: '#F97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true
      }
    ]
  },
  categories: {
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Home', 'Sports'],
    datasets: [{
      data: [30, 25, 15, 10, 12, 8],
      backgroundColor: [
        '#15566C',
        '#F97316',
        '#22C55E',
        '#F59E0B',
        '#0EA5E9',
        '#EF4444'
      ]
    }]
  },
  traffic: {
    labels: ['Direct', 'Social', 'Email', 'Organic', 'Referral'],
    datasets: [{
      data: [40, 25, 15, 12, 8],
      backgroundColor: [
        '#15566C',
        '#F97316',
        '#22C55E',
        '#F59E0B',
        '#0EA5E9'
      ]
    }]
  },
  revenue: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Revenue',
      data: [4500, 5200, 4800, 6000, 5800, 7000, 6500],
      backgroundColor: 'rgba(21, 86, 108, 0.8)'
    }]
  }
}