import { useMemo } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Badge, Heading, Text } from './ui';
import { ProjectInterface } from '@/types/general';
import { X } from 'phosphor-react';

interface ProjectCardProps extends Omit<ProjectInterface, 'id'> {}

export function ProjectCard({
  title,
  description,
  image,
  url,
  badges,
  myContributions,
}: ProjectCardProps) {
  const firstThreeBadges = useMemo(() => {
    return badges.slice(0, 3);
  }, [badges]);

  const hasMoreBadges = useMemo(() => {
    return badges.length > 3;
  }, [badges]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex flex-col items-center w-full max-w-[16rem] max-h-96 p-4 rounded-br-2xl rounded-tl-2xl shadow-sm hover:shadow-md transition-shadow border border-blue-600/30 dark:border-blue-600/15 hover:border-blue-600 dark:hover:border-blue-600">
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 p-4 flex items-center justify-center rounded-full shadow-md bg-white-600 dark:bg-black-700">
              <img src={image} alt={`Logo ${title}`} />
            </div>
            <Heading size="sm">{title}</Heading>
          </div>
          <div className="flex flex-wrap gap-2 justify-center my-4">
            {firstThreeBadges.map(({ name, color }) => (
              <Badge key={name} color={color}>
                {name}
              </Badge>
            ))}
            {hasMoreBadges && <Badge color="gray">+{badges.length - 3}</Badge>}
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 dark:bg-white-800/15 bg-black-800/15 backdrop-blur-sm z-40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-screen-sm shadow-lg bg-white-400 text-black-800 dark:text-white-400 dark:bg-black-800 rounded-md">
          <Dialog.Title className="flex items-center justify-between p-8">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 p-1 flex items-center justify-center rounded-full shadow-md bg-white-600 dark:bg-black-700">
                <img src={image} alt={`Logo ${title}`} />
              </div>
              <Heading size="sm" className="text-center">
                {title}
              </Heading>
            </div>
            <Dialog.Close>
              <button>
                <X size={24} />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <div className="p-8 space-y-8">
            <div className="flex flex-col gap-2">
              <Text className="font-extrabold">Tecnologias utillizadas</Text>
              <div className="flex flex-wrap gap-2">
                {badges.map(({ name, color }) => (
                  <Badge key={name} color={color}>
                    {name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Text className="font-extrabold">Sobre a aplicação</Text>
              <Text size="sm">{description}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text className="font-extrabold">Minhas contribuições</Text>
              <Text size="sm">{myContributions}</Text>
            </div>
            <div className="flex flex-col gap-2">
              <Text className="font-extrabold">Acesse à aplicação</Text>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline text-blue-500"
              >
                {url}
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
