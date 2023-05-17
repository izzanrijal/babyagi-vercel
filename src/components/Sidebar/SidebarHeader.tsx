import { useExecution } from '@/hooks/useExecution';
import { useExecutionStatus } from '@/hooks/useExecutionStatus';
import { Cross2Icon, PlusIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface SidebarHeaderProps {
  onMenuClick: () => void;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ onMenuClick }) => {
  const { selectExecution } = useExecution();
  const { isExecuting } = useExecutionStatus();

  const handleClick = () => {
    selectExecution(undefined);
  };

  return (
    <header className="flex items-center border-b border-neutral-600 pb-4">
      <button
        className="flex w-[210px] items-center gap-3 rounded-md p-3 text-sm text-white transition-colors duration-200 hover:bg-neutral-500/10 disabled:opacity-50 sm:w-full"
        onClick={handleClick}
        disabled={isExecuting}
      >
        <PlusIcon />
        {'New objective'}
      </button>
      <button className="p-3 sm:hidden" onClick={onMenuClick}>
        <Cross2Icon />
      </button>
    </header>
  );
};
