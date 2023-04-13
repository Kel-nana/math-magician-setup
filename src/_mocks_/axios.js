jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));
