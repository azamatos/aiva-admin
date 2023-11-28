const advertisementHeadCells: HeadCell[] = [
  {
    id: "title",
    align: "left",
    label: "Реклама",
  },
  {
    id: "adType",
    align: "left",
    label: "Тип рекламы",
  },
  {
    id: "accessType",
    align: "left",
    label: "Тип доступа",
  },
  {
    id: "clientContact",
    align: "left",
    label: "Контакты клиента",
  },
];

const artistHeadCells: HeadCell[] = [
  {
    id: "title",
    align: "left",
    label: "Имя артиста",
  },
  {
    id: "channel_id",
    align: "left",
    label: "ID канала",
  },
  {
    id: "created_at",
    align: "left",
    label: "Дата создания",
  },
];

const albumHeadCells: HeadCell[] = [
  {
    id: "title",
    align: "left",
    label: "Название альбома",
  },
  {
    id: "playlist_id",
    align: "left",
    label: "ID плейлиста",
  },
  {
    id: "created_at",
    align: "left",
    label: "Дата создания",
  },
];

const trackHeadCells: HeadCell[] = [
  {
    id: "title",
    align: "left",
    label: "Название трека",
  },
  {
    id: "video_id",
    align: "left",
    label: "ID трека",
  },
  {
    id: "created_at",
    align: "left",
    label: "Дата создания",
  },
];

export {
  artistHeadCells,
  albumHeadCells,
  trackHeadCells,
  advertisementHeadCells,
};
