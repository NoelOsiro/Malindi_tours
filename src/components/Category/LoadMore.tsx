const LoadMoreButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <div className="flex justify-center">
      <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400" onClick={onClick}>
        Load more posts...
      </button>
    </div>
  );
export default LoadMoreButton;